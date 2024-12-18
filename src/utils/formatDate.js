import DateObject from "react-date-object";

export const formatDate = (inputDate) => {
    let date = new DateObject(inputDate);
    return date = date.format("DD/MM/YYYY hh:mm a");
}
