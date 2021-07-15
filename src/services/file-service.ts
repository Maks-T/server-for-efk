import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
  saveFile = (file: any) => {
    try {
      const fileExt = String(file.name).substring(
        String(file.name).lastIndexOf('.')
      );
      const fileName = uuid.v4() + fileExt;

      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
     
    }
  };
}

export default new FileService();
