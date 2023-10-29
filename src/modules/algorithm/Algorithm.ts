// @ts-ignore

import AlgorithmTools from "./AlgorithmTools";

class Algorithm extends AlgorithmTools {
  constructor() {
    super();
  }

  async descrypt(data: string): Promise<void> {

    const algorithm = "aes-192-cbc";
    const key = this.Tools.vault.scryptSync(this.getSalt(), "salt", 24);
    const iv = Buffer.alloc(16, 0);
    const decipher = this.Tools.vault.createDecipheriv(algorithm, key, iv);
  
    let decrypted = "";
  
    try {
      decipher.on("readable", () => {
        let chunk;
        while (null !== (chunk = decipher.read())) {
          decrypted += chunk.toString("utf-8");
        }
      });
  
      decipher.on("end", () => {
        console.log("decrypt", decrypted);
      });
  
      const binaryData = Buffer.from(data, 'hex');
  
      decipher.write(binaryData, 'hex');
      decipher.end();
    } catch (error) {
      console.error("Decryption failed:", error);
    }
    // const algorithm = "aes-192-cbc";

    // const key = this.Tools.vault.scryptSync(this.getSalt(), "salt", 24);
    // const iv = Buffer.alloc(16, 0);
    // const decipher = this.Tools.vault.createCipheriv(algorithm, key, iv);

    // let descrypted = "";

    // decipher.on("readable", (chunk: any) => {
    //   while (null !== (chunk = decipher.read())) {
    //     descrypted += chunk.toString("utf-8");
    //   }
    // });

    // decipher.on("end", () => {
    //   console.log("decrypt", descrypted);
    // });

    // console.log(decipher.write(data, "hex"));
    // decipher.end();
  }
}

export default Algorithm;
