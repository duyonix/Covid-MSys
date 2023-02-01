const API_URL = "https://covid-msys.onrender.com";

function signout() {
  fetch(`${API_URL}/api/v1/authentication/signout`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((resp) => resp.json())
    .then((res) => {
      let { result } = res;
      if (result == "success") {
        location.href = "/";
      }
    })
    .catch((err) =>
      toastMessage(message(err || "Có lỗi xảy ra, vui lòng thử lại"))
    );
}
