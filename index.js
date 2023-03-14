const Valutidate = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const psw = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const check = document.getElementById("checkbox").checked;
    var Entry;
    if (localStorage.getItem('user-entries') === null)
      Entry = [];
    else
      Entry = JSON.parse(localStorage.getItem('user-entries'))
    Entry.unshift({
      name: name,
      email: email,
      psw: psw,
      dob: dob,
      check: check
    })
    localStorage.setItem('user-entries', JSON.stringify(Entry));
    monitor_data();
  }
  const monitor_data = () => {
    var Entry;
    if (localStorage.getItem('user-entries') === null)
      Entry = [];
    else
      Entry = JSON.parse(localStorage.getItem('user-entries'))

    var html = "";

    Entry.forEach((element, intex) => {
      html += "<tr>";
      html += "<td>" + element.name + "</td>";
      html += "<td>" + element.email + "</td>";
      html += "<td>" + element.psw + "</td>";
      html += "<td>" + element.dob + "</td>";
      html += "<td>" + element.check + "</td>";
      html += "</tr>";
    });
    document.querySelector("#regTable tbody").innerHTML = html;

  }
  document.onload = monitor_data();
