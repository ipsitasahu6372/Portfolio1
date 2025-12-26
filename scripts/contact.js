

const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "fa-solid fa-phone",
    name: "Phone",
    value: "+91 6372611860",
    href: "tel:+916372611860",
  },
  {
    id: 2,
    icon: "fa-solid fa-envelope",
    name: "E-Mail",
    value: "ipsitasahu6372@gmail.com",
    href: "mailto:ipsitasahu6372@gmail.com",
  },
  {
    id: 3,
    icon: "fa-solid fa-location-dot",
    name: "Country",
    value: "India",
    href: "#",
  },
];

if (media) {
  media.innerHTML = contactList
    .map(
      (ele) => `
      <div class="media">
        <span><i class="${ele.icon}"></i></span>
        <div class="contact-value">
          <p>${ele.name}</p>
          <a href="${ele.href}">${ele.value}</a>
        </div>
      </div>
    `
    )
    .join("");
}

/* ================= EMAIL SEND ================= */

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("All fields are mandatory!");
      return;
    }

    emailjs
      .send("service_4c4e3re", "template_qjwa9tv", {
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .then(() => {
        alert("✅ Message Sent Successfully!");
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message");
      });
    });