const createServer = require("./utils/server");

const app = createServer();

const init = async () => {
  try {
    app.listen(5000, () => {
      console.log(`Server is listening on PORT: 5000`);
    });
  } catch (err) {
    console.error("Error encountered", err);
  }
};

init();
