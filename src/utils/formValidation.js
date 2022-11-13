import { notification } from "antd";

export function minLengthValidation(inputData, minLength) {
  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  if (value.length >= minLength) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function nameValidation(inputData) {
  // eslint-disable-next-line no-useless-escape
  const nameValid = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  const resultValidation = nameValid.test(value.name);
  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function emailValidation(inputData) {
  const emailValid =
    // eslint-disable-next-line no-useless-escape
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  // /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function minLengthValidationTelephone(inputData) {
  const { value } = inputData;
  const telephoneVal = inputData.telephone;
  const telephoneValid = /^\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  ///^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  // /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\?([0-9]{4})$/;

  removeClassErrorSuccess(inputData);

  const resultValidation = telephoneValid.test(value);
  if (resultValidation && telephoneVal !== true) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function commentsValidation(inputData) {
  const commentsValid =
    // eslint-disable-next-line no-useless-escape
    /^.{30,255}$/;
  const commentsVal = inputData.comments;
  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  const resultValidation = commentsValid.test(value);

  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

function removeClassErrorSuccess(inputData) {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
}
