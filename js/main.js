formRadio.onchange = function(){
    brand.removeAttribute('disabled');
    btnSend.setAttribute('disabled', '');
    
    if (videoCamera.checked) {
        model.setAttribute('disabled', '');
        cleanerForm(brand);
        addProduct(arrVideoCamera);
        listModel(arrVideoCamera);
    }

    if (microphones.checked) {
        model.setAttribute('disabled', '');
        cleanerForm(brand);
        addProduct(arrMicrophones);
        listModel(arrMicrophones);
    }
}

brand.onchange = function(){
    selectedBrand = this.value;

    if (selectedBrand) {
        model.removeAttribute('disabled');
    } else {
        model.value = '';
        model.setAttribute('disabled', '');
        btnSend.setAttribute('disabled', '');
    }

    listModel(videoCamera.checked ? arrVideoCamera : arrMicrophones);
} 
  
model.onchange = function(){
    const valueModel = this.value;

    if (valueModel) {
        btnSend.removeAttribute('disabled');
    } else {
        btnSend.setAttribute('disabled', '');
    }
}  

function addProduct(array) {
    const optionSelectFirst = doc.createElement('option');
    optionSelectFirst.value = '';
    brand.append(optionSelectFirst);

    for (let i = 0; i < array.length; i++) {
        const optionSelect = doc.createElement('option');
        optionSelect.innerHTML = array[i].brand;
        brand.append(optionSelect);
    }

    return brand;
}

function cleanerForm(form) {
    while (form.firstChild) {
        form.removeChild(form.firstChild);
    }
}

function listModel(array) {
    model.innerHTML = '';

    const optionSelectFirst = doc.createElement('option');
    optionSelectFirst.value = '';
    model.append(optionSelectFirst);

    if (selectedBrand) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].brand === selectedBrand) {
                const models = array[i].models;

                for (let j = 0; j < models.length; j++) {
                    const optionSelect = doc.createElement('option');
                    optionSelect.innerHTML = models[j].modelName;
                    model.append(optionSelect);
                }
                break;
            }
        }
    }

    return model;
}

// brand.addEventListener('mouseenter', function() {
//     let previewImage; 
    
//     for (let i = 0; i < arrVideoCamera.length; i++)
//     previewImage = arrVideoCamera[i].img;
//     preview.style.backgroundImage = previewImage;
// });

// console.log(selectedBrand);

