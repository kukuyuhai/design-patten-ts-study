interface Data {
  tosting(str: string): void;
}

class DataSet implements Data {
  tosting(str: string): void {
    console.log("Data", str);
  }
}

class DataService implements Data {
  tosting(str: string): void {
    console.log("DataService", str);
  }
}

class DataTypeFactory {
  getDataType(type: string) {
    if (!type) return null;

    switch (type) {
      case "dataset":
        return new DataSet();

      case "dataSerive":
        return new DataService();
    }
  }
}

const dataTypeFactory = new DataTypeFactory();
const data = dataTypeFactory.getDataType("dataset");
data?.tosting("ok");
