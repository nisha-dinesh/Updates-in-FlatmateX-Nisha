const form = document.getElementById('uploadForm');
const successMessage = document.getElementById('successMessage');

// Function for image preview (works for all relevant fields)
function setUpImagePreview(inputId, previewDivId) {
  const input = document.getElementById(inputId);
  const previewDiv = document.getElementById(previewDivId);
  input.addEventListener('change', function () {
    previewDiv.innerHTML = '';
    Array.from(input.files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = e => {
          const imgEl = document.createElement('img');
          imgEl.src = e.target.result;
          previewDiv.appendChild(imgEl);
        };
        reader.readAsDataURL(file);
      }
    });
  });
}

// Set up flat photo previews
setUpImagePreview('imgKitchen', 'previewKitchen');
setUpImagePreview('imgLiving', 'previewLiving');
setUpImagePreview('imgRoom', 'previewRoom');
setUpImagePreview('imgMore', 'previewMore');

// Set up flatmate photo previews
for(let i=1; i<=4; i++) {
  setUpImagePreview('mateImg'+i, 'matePreview'+i);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate flat details are filled (all required fields checked by browser)
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Collect flat/property details
  const flatData = {
    type: form.type.value.trim(),
    accomType: form.accomType.value.trim(),
    propType: form.propType.value.trim(),
    title: form.title.value.trim(),
    price: Number(form.price.value),
    billsIncluded: form.billsIncluded.value,
    securityDeposit: Number(form.securityDeposit.value) || 0,
    availableFrom: form.availableFrom.value,
    desc: form.desc.value.trim(),
    loc: form.loc.value.trim(),
    images: {
      kitchen: form.imgKitchen.files[0]?.name || "",
      living: form.imgLiving.files[0]?.name || "",
      room: form.imgRoom.files[0]?.name || "",
      more: form.imgMore.files ? Array.from(form.imgMore.files).map(f=>f.name) : [],
    }
  };

  // Collect up to 4 optional flatmate profiles
  const flatmates = [];
  for(let i=1; i<=4; i++) {
    const name = form['mateName'+i].value.trim();
    const gender = form['mateGender'+i].value;
    const age = form['mateAge'+i].value;
    const qualification = form['mateQualification'+i].value.trim();
    const desc = form['mateDesc'+i].value.trim();
    const photo = form['mateImg'+i].files[0]?.name || '';
    // If any flatmate field is filled, treat as an entry
    if(name || gender || age || qualification || desc || photo) {
      flatmates.push({name, gender, age, qualification, desc, photo});
    }
  }

  // Demo: Save everything to localStorage (images not stored as files)
  let savedListings = JSON.parse(localStorage.getItem('ownerListings') || '[]');
  savedListings.push({ flat: flatData, flatmates });
  localStorage.setItem('ownerListings', JSON.stringify(savedListings));

  form.reset();
  // Clear previews
  ['previewKitchen','previewLiving','previewRoom','previewMore','matePreview1','matePreview2','matePreview3','matePreview4'].forEach(id => {
    document.getElementById(id).innerHTML = '';
  });

  successMessage.classList.remove('hidden');
  setTimeout(() => successMessage.classList.add('hidden'), 4000);
});
