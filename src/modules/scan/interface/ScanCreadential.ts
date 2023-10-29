import Algorithm from "@modules/algorithm/Algorithm";
import ScanTools from "../ScanTools";

const filename: string = "lohr_credential.txt";

class ScanCredential extends ScanTools {
  private files: Array<any>;

  private filepath: string;

  constructor() {
    super();
    this.filepath = this.Tools.path.join(
      __dirname,
      "..",
      "..",
      "files",
      "credentials"
    );
  }

  /**
   *@method
   *@override
   */
  async readDirectory(): Promise<ScanCredential> {
    try {
      const files = this.Tools.fs.readdirSync(this.filepath);

      if (!files.includes(filename))
        throw new Error(`The ${filename} is missing.`);

      this.files = files;

      return this;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  /**
   *@method
   *@override
   */
  async readFiles(): Promise<void> {
    this.validator();

    const [file] = this.files;

    let content = this.Tools.fs.readFileSync(`${this.filepath}//${file}`);

    console.log(JSON.parse(content.toString()));
  }

  /******************Helpers****************** */

  validator() {
    let index = this.files.indexOf(filename);

    if (index > -1) {
      let file = this.files[index];

      if (this.Tools.path.extname(file) != ".txt")
        throw new Error(`The ${filename} is not recognized.`);

      this.files = [this.files[index]];
    } else {
      throw new Error(`The ${filename} is missing.`);
    }
  }
}

export default ScanCredential;
