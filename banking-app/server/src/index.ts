import { AppDataSource } from "./data-source"
// "esModuleInterop": true, a serveren belüli tsconfig-ba
import express from 'express';

async function main() {
  try {
    // Vezérlésnek addig dokkolódni kell amíg nem tré vissza valamivel a függvényünk.
    await AppDataSource.initialize();

    // Express server létrehozása
    const app = express();

    // TODO :: routers

    // Server elindítása
    app.listen(3000, () => {
      console.log("Listening on port 3000...");
    });

  }catch (err) {
    console.error(err);
  }
}

main();

