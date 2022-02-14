const express = require("express");
const EmploymentDetails = require("../models/employmentDetails");
const Profile = require("../models/profile");
const KYC = require("../models/kycDetails");
const multer = require("multer");
const path = require("path");

const ApplyLoanrouter = express.Router();
ApplyLoanrouter.use(
  "/uploads",
  express.static(path.join(__dirname, "/uploads"))
);

ApplyLoanrouter.post("/employmentDetails", async (req, res) => {
  console.log("hlo");
  console.log("body", req.body);
  try {
    const {
      FirstName,
      LastName,
      FatherName,
      DOB,
      Email,
      Mobile,
      CurrentAddress,
      CurrentAddress2,
      State,
      City,
      ZIP,
      CompanyName,
      Designation,
      CurrentCompanyExperience,
      TotalExperience,
      MonthlyIncome,
      AnnualIncome,
    } = req.body;

    console.log(
      FirstName,
      LastName,
      FatherName,
      DOB,
      Email,
      Mobile,
      CurrentAddress,
      CurrentAddress2,
      State,
      City,
      ZIP,
      CompanyName,
      Designation,
      CurrentCompanyExperience,
      TotalExperience,
      MonthlyIncome,
      AnnualIncome
    );
    if (
      FirstName &&
      LastName &&
      FatherName &&
      DOB &&
      Email &&
      Mobile &&
      CurrentAddress &&
      CurrentAddress2 &&
      State &&
      City &&
      ZIP &&
      CompanyName &&
      Designation &&
      CurrentCompanyExperience &&
      TotalExperience &&
      MonthlyIncome &&
      AnnualIncome
    ) {
      const profile = new Profile({
        FirstName,
        LastName,
        FatherName,
        Email,
        Mobile,
        DOB,
        CurrentAddress,
        CurrentAddress2,
        State,
        City,
        ZIP,
      });
      const profileSave = await profile.save();
      const Details = new EmploymentDetails({
        CompanyName,
        Designation,
        CurrentCompanyExperience,
        TotalExperience,
        MonthlyIncome,
        AnnualIncome,
      });
      const DetailsSave = await Details.save();
      console.log(profileSave);
      if (profileSave && DetailsSave) {
        console.log("1");

        return res.json("data is saved");
      } else {
        console.log("2");
        res.status(400).json("Data is not saved");
      }
    } else {
      console.log("3");
      return res.send({
        status: 0,
        message: "please fill all the field carefully",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(400).json("Data is not saved");
  }
});

const storage = multer.diskStorage({
  destination: "uploads/",

  filename: (req, file, callback) => {
    callback(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
ApplyLoanrouter.post(
  "/kycDetails",
  upload.fields([
    { name: "adhaar" },
    { name: "pan" },
    { name: "photo" },
    { name: "bankStmt" },
  ]),
  async (req, res) => {
    console.log("4");
    console.log("kycDetails req", req);
    console.log("req.files", req.files);

    const fileArray = [];
    const filesArray = [
      req.files.adhaar[0],
      req.files.pan[0],
      req.files.photo[0],
      req.files.bankStmt[0],
    ];

    console.log("aaaaaa fileArray", filesArray);

    filesArray.forEach((element) => {
          
      console.log("aaaaaa element", element);
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: fileSizeFormatter(element.size, 2),
      };
      fileArray.push(file);
    });
    console.log("req.body", req.body);
    console.log("fileArray", fileArray);

    let obj1 = {
      AdhaarNo: req.body.AdhaarNo,
      Adhaar: JSON.stringify(fileArray[0]),
      PanNo: req.body.PanNo,
      Pan: JSON.stringify(fileArray[1]),
      BankName: req.body.BankName,
      AccountNo: req.body.AccountNo,
      IFSCcode: req.body.IFSCcode,
      Photo: JSON.stringify(fileArray[2]),
      BankStmt: JSON.stringify(fileArray[3]),
      ActiveLoanAmount: req.body.LoanAmount,
    };
    const kyc = new KYC(obj1);
    console.log("obj1", obj1);
    await kyc.save();
    res.status(200).json("save");
  }
);

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Byte";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + "-" + sizes[index]
  );
};

module.exports = ApplyLoanrouter;
