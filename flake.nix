{
  description = "Smartflow flake";

  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.2411.710905.tar.gz";
    flake-parts.url = "https://flakehub.com/f/hercules-ci/flake-parts/0.1.350.tar.gz";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [];
      systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin"];
      perSystem = {pkgs, ...}: {
        formatter = pkgs.alejandra;

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            alejandra
          ];

          buildInputs = with pkgs; [
            nodejs
            corepack
          ];
        };
      };
      flake = {};
    };
}
