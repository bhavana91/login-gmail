const Excel = require('exceljs');
let filename='/home/ad.rapidops.com/bhavana.polireddy/Videos/testing-excel/newfile.xlsx';
describe('it should open salesmate',function () {
    it ('should fill contact form', () => {
         browser.url("https://kalp.salesmate.io/login.html"); 
        let workbook = new Excel.Workbook(); 
        workbook.xlsx.readFile(filename)
        .then(function() {
        let worksheet = workbook.getWorksheet("Sheet1");
        worksheet.getCell('A1').value="kalp.shah@rapidops.com";
        let name = worksheet.getCell('A1').value;
        worksheet.getCell('B1').value="123456";

        let passwordlogin = worksheet.getCell('B1').value;
        let email = $("//input[@id='email']");
        email.setValue(name);
        let password = $("//input[@id='password']");
        password.setValue(passwordlogin);
        let submit = $("//button[@id='login_btn']");
        submit.click();
    })().catch( e => { console.error(e) } )
  })
})