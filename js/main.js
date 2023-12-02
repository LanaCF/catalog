formRadio.onchange = function(){
    brand.removeAttribute('disabled');
    
    if (videoCamera.checked) {
        model.setAttribute('disabled', '');
        cleanerForm(brand);
        cleanerForm(model); //////////////////
        addProduct(arrVideoCamera);
        listModel(arrVideoCamera);
    }

    if (microphones.checked) {
        model.setAttribute('disabled', '');
        cleanerForm(brand);
        cleanerForm(model); //////////////////
        addProduct(arrMicrophones);
    }
}

brand.onchange = function(){
    const valueBrand = this.value;

    if (valueBrand) {
        model.removeAttribute('disabled');
    } else {
        model.value = '';
        model.setAttribute('disabled', '');
        btnSend.setAttribute('disabled', '');
    }

    
} 
  
model.onchange = function(){
    const valueModel = this.value;

    if (valueModel) {
        btnSend.removeAttribute('disabled');
    } else {
        btnSend.setAttribute('disabled', '');
    }
}  




console.log();





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

function cleanerForm() {
    while (brand.firstChild) {
        brand.removeChild(brand.firstChild);
    }
}

function listModel(array) { //////////////////////////////
    const optionSelectFirst = doc.createElement('option');
    optionSelectFirst.value = '';
    model.append(optionSelectFirst);

    for (let i = 0; i < array[i].models.length; i++) {
        const optionSelect = doc.createElement('option');
        optionSelect.innerHTML = array[i].models.modelName;
        model.append(optionSelect);
    }

    return model;
}

