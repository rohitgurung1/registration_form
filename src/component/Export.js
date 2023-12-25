import React, { useState } from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import axios from "axios";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

export default function ExportLeads({ leadCreatorId, leadType, dateRange }) {
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    
    // Use Axios to make the API request
    const data = await axios.get("https://online.gaasc.edu.np/api/application-entities")
      return data.data
  }

  const exportLeads = async () => {
    const input = {
      leadType: leadType,
      dateRange: dateRange ? dateRange : null,
      creatorId: leadCreatorId,
    };
    setLoading(true);

    let creatorName = "";

    try {
      const applications = await fetchData();
      if (!Array.isArray(applications?.data) || !applications?.data.length)
        throw new Error("No leads found");
      const dataToExport = applications.data.map((application, i) => {
        application = application.attributes
        return {
          SN: i + 1,
          StudentName: application.studentName,
          FatherName: application.fatherName,
          Nationality: application.Nationality,
          District: application.district,
          VDC: application.vdc,
          Ward: application.ward,
          Email: application.Email,
          MobileNumber: application.MobileNumber,
          TelephoneNumber: application.TelephoneNumber,
          SLCBoard: application.SLCBoard,
          SLCGPAPercentage: application.SLCGPAPercentage,
          SEEgpaPercentage: application.gpaPercentageSEE,
          SLCDivision: application.SLCDivision,
          IntermediateUniversity: application.IntermediateUniversity,
          IntermediateAge: application.IntermediateGPAPercentage,
          IntermediateGPAPercentage: application.gpaPercentageIntermediate,
          IntermediateDIvision: application.IntermediateDIvision,
          TotalMarks: application.TotalMarks,
          SymbolNo: application.SymbolNo,
          Program: application.Program,
          termsCheckbox: application.termsCheckbox,
        };
      });

      const ws = XLSX.utils.json_to_sheet(dataToExport);

      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(
        data,
        `leads-${
          leadCreatorId ? `${creatorName}-` : ""
        }${new Date().toDateString()}` + fileExtension
      );
    } catch (error) {
      console.log("error ?  ", error);
      message.error(
        error?.response?.data?.error?.message ?? "Failed to export"
      );
      //
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn-success mb-2"
      onClick={exportLeads}
      disabled={loading}
    >
      Export Registration Form in Excel
    </button>
  );
}
