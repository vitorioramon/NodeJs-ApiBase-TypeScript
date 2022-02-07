import packageInfo from './../../package.json';

export class ApplicationInfo {
  public static Versao: string = packageInfo.version;
  public static Descricao: string = packageInfo.description;
}