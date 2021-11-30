declare module "travel-pdf-to-excel" {
  function index(
    id: string,
    name: string,
    pdfFilePaths: Array<string>,
    outputPath: string
  ): Promise<{ status: string; message: unknown }>;
  export = index;
}
