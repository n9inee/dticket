import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import { postcssModules } from "esbuild-sass-plugin";
import fs from "fs";

const args = process.argv.slice(2);

const isWatch = args.includes("--watch");
const isProd = args.includes("--prod");

let config = isProd
  ? {
      entryPoints: ["src/app.ts", "src/scss/app.scss"],
      outdir: "dist/",
      target: "es2020",
      bundle: true,
      minify: true,
      write: false,
      sourcemap: true,
      plugins: [sassPlugin(/* { transform: postcssModules() } */)],
    }
  : {
      entryPoints: ["src/app.ts", "src/scss/app.scss"],
      outdir: "dist/",
      target: "es2020",
      bundle: true,
      minify: false,
      sourcemap: false,
      write: false,
      plugins: [sassPlugin()],
    };

let ctx = await esbuild.context(config);
const build = async () => {
  const res = await ctx.rebuild();
  const js = res.outputFiles.find((f) => f.path.endsWith(".js"));
  const css = res.outputFiles.find((f) => f.path.endsWith(".css"));
  const dir = process.cwd();

  fs.readFile(dir + "/src/index.html", "utf8", (err, data) => {
    if (err) {
      exit(err);
    }

    let out = data.toString();
    out = data.replace("/* #__include_js */", js.text);
    out = out.replace("/* #__include_css */", css.text);

    fs.writeFile(dir + "/index.html", out, () => {});
  });
};

if (isWatch) {
  await build();
  setInterval(async () => {
    await build();
  }, 4000);
} else {
  await build();
  await ctx.dispose();
}
