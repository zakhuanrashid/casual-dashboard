const endpoints = {
  casuals: "https://docs.google.com/spreadsheets/d/e/YOUR_LINK_HERE/pub?gid=0&range=B1&output=csv",
  hours: "https://docs.google.com/spreadsheets/d/e/YOUR_LINK_HERE/pub?gid=0&range=B2&output=csv",
  noclock: "https://docs.google.com/spreadsheets/d/e/YOUR_LINK_HERE/pub?gid=0&range=B3&output=csv",
  overtime: "https://docs.google.com/spreadsheets/d/e/YOUR_LINK_HERE/pub?gid=0&range=B4&output=csv",
  pending: "https://docs.google.com/spreadsheets/d/e/YOUR_LINK_HERE/pub?gid=0&range=B5&output=csv"
};

async function fetchValue(id, url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    document.getElementById(id).textContent = text.trim();
  } catch (e) {
    document.getElementById(id).textContent = "Err";
  }
}

fetchValue("casuals-count", endpoints.casuals);
fetchValue("total-hours", endpoints.hours);
fetchValue("no-clockout", endpoints.noclock);
fetchValue("ot-count", endpoints.overtime);
fetchValue("pending-pay", endpoints.pending);