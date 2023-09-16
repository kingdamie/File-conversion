// for coversion to excel
  $(document).ready(function () {
    $("#export-button").click(function () {
      // Select the table to export
      $("#tableToConvert").table2excel({
        name: "Worksheet Name",
        filename: "excel-export",
        fileext: ".xls", // You can also use ".xlsx" for Excel 2007 and later
      });
    });
  });
// for coversion to pdf
 document.getElementById('downloadButton').addEventListener('click', function() {
    const element = document.getElementById('tableToConvert');
            
    html2pdf()
     .from(element)
    .save('table-to-pdf.pdf');
        });