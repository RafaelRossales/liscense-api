import ScanCredential from "@modules/scan/interface/ScanCreadential";

function liscenseExpiresIn(data: string) {
  const inputDate = new Date(data);
  const updatedData = new Date(inputDate);

  updatedData.setDate(updatedData.getDate() + 365);

  const updatedISODate = updatedData.toISOString();

  return updatedISODate;
}

(async function () {
  const creadentials = new ScanCredential();
  (await creadentials.readDirectory()).readFiles();
  // const date = "2023-12-08T02:43:34";
  // console.log(liscenseExpiresIn(date));
})();
