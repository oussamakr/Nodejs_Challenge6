const cron = require("node-cron");

cron.schedule("*/2 * * * *", () => {
  console.log("oussama krayen s'affichera toutes les deux minutes.");
});

module.exports = cron;
