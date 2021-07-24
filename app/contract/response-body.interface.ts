
export default interface ResponseBody<Data, Error>
{

  status: string;
  message: string;
  data?: Data;
  error?: Error;

}
