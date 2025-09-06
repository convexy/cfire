import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),  // ライブラリのエントリ
            name: "MyThreeLib",                         // UMD 用グローバル名
            fileName: (format) => `my-three-lib.${format}.js`,
        },
        rollupOptions: {
            // three.js は外部依存として扱う（バンドルに含めない）
            external: ["three"],
            output: {
                globals: {
                    three: "THREE",
                },
            },
        },
    },
});
