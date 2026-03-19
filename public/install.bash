#!/usr/bin/env bash

# Companion CLI (c2) Installer
# https://companion.ky0.dev/

set -e

# --- Colors ---
RESET='\033[0m'
BOLD='\033[1m'
GRAY='\033[90m'
ORANGE='\033[38;2;217;119;87m' # #D97757
GREEN='\033[38;2;139;191;122m' # #8BBF7A
WHITE='\033[38;2;243;241;233m' # #F3F1E9

info() {
  echo -e "${GRAY}[INFO]${RESET} $1"
}

success() {
  echo -e "${GREEN}[SUCCESS]${RESET} $1"
}

warn() {
  echo -e "${ORANGE}[WARNING]${RESET} $1"
}

fatal() {
  echo -e "${ORANGE}[ERROR]${RESET} $1" >&2
  exit 1
}

# --- System check ---
OS="$(uname -s)"
ARCH="$(uname -m)"

info "Detected OS: ${WHITE}$OS${RESET}"
info "Detected Architecture: ${WHITE}$ARCH${RESET}"

# Map to Rust target triples
TARGET=""
if [ "$OS" = "Linux" ]; then
  if [ "$ARCH" = "x86_64" ]; then
    TARGET="x86_64-unknown-linux-gnu"
  elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then
    TARGET="aarch64-unknown-linux-gnu"
  fi
elif [ "$OS" = "Darwin" ]; then
  if [ "$ARCH" = "x86_64" ]; then
    TARGET="x86_64-apple-darwin"
  elif [ "$ARCH" = "arm64" ] || [ "$ARCH" = "aarch64" ]; then
    TARGET="aarch64-apple-darwin"
  fi
fi

if [ -z "$TARGET" ]; then
  fatal "Unsupported OS or Architecture: $OS $ARCH. Please build from source."
fi

# --- Find install directory ---
INSTALL_DIR="$HOME/.local/bin"

if [ ! -d "$INSTALL_DIR" ]; then
  info "Creating directory $INSTALL_DIR"
  mkdir -p "$INSTALL_DIR"
fi

if [[ ":$PATH:" != *":$INSTALL_DIR:"* ]]; then
  warn "Directory $INSTALL_DIR is not in your PATH."
  warn "You may need to add it to your ~/.bashrc, ~/.zshrc, or ~/.config/fish/config.fish"
  warn "Example: export PATH=\"\$HOME/.local/bin:\$PATH\""
fi

# --- Download Binary ---
GITHUB_REPO="companion-lab/cc"
VERSION="latest" # Currently placeholder

info "Fetching latest release information from $GITHUB_REPO..."

# Note: Since the Rust binary is not yet published to a public GitHub release, 
# this script falls back to cloning and compiling via cargo if cargo is installed.
# Once CI is setup, replace the fallback block with the actual curl download.

if command -v cargo &> /dev/null; then
  info "Cargo detected. Building from source..."
  
  # create temporary build dir
  TMP_DIR=$(mktemp -d)
  info "Cloning repository..."
  if ! command -v git &> /dev/null; then
    fatal "Git is not installed. Please install git or download the binary manually."
  fi
  
  git clone --depth 1 -q https://github.com/companion-lab/cc "$TMP_DIR/c2" 2>/dev/null || true
  
  # if github clone fails (private repo), try to find local workspace for dev install
  if [ ! -f "$TMP_DIR/c2/Cargo.toml" ]; then
    info "GitHub clone failed (repo might be private). Checking for local workspace..."
    # Local fallback for development 
    if [ -f "$HOME/ws/PPI/c2/Cargo.toml" ]; then
       info "Found local workspace at $HOME/ws/PPI/c2. Building from there..."
       cd "$HOME/ws/PPI/c2"
       cargo build --release -q
       cp target/release/c2 "$INSTALL_DIR/c2"
       success "Successfully installed c2 to $INSTALL_DIR/c2"
    else
       fatal "Could not download binary and could not build from source. Installation failed."
    fi
  else
    cd "$TMP_DIR/c2"
    info "Compiling c2 binary (this may take a few minutes)..."
    cargo build --release
    cp target/release/c2 "$INSTALL_DIR/c2"
    success "Successfully installed c2 to $INSTALL_DIR/c2"
    rm -rf "$TMP_DIR"
  fi
else
  # Placeholder for future curl download
  # BINARY_URL="https://github.com/$GITHUB_REPO/releases/download/$VERSION/c2-$TARGET.tar.gz"
  # info "Downloading $BINARY_URL..."
  # curl -fsSL "$BINARY_URL" | tar xz -C "$INSTALL_DIR" c2
  
  fatal "Rust (cargo) is required to build c2 from source currently. Please install rustup or wait for binary releases."
fi

# --- Completion ---
echo ""
echo -e "${ORANGE}Companion AI (c2) is ready.${RESET}"
echo -e "Run ${BOLD}c2 --help${RESET} to get started."
echo ""