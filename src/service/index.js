import axios from "axios";
const APIURL = `https://rokad-api.herokuapp.com/rokad`;
// const APIURL = `http://localhost:4000/rokad`;

const saveDailyLogs = async (log) => {
  try {
    let result = await axios.post(APIURL + "/daily-logs", log);
    return result;
  } catch (e) {
    return e;
  }
};

const saveExpenses = async (expenseData) => {
  try {
    let result = await axios.post(APIURL + "/expense-info", expenseData);
    return result;
  } catch (e) {
    return e;
  }
};

export { saveDailyLogs, saveExpenses };
