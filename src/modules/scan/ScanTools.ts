import ScanBase from "./ScanBase";
import fs from "fs";
import path from "path";

class ScanTools extends ScanBase {
  constructor() {
    super();
  }

  get Tools() {
    return {
      fs: { ...fs },
      path: { ...path },
    };
  }
}

export default ScanTools;
