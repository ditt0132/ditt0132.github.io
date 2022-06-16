var eggnum = 0;
document.getElementById("egg").addEventListener("click", listner => {
    eggnum = (eggnum + 1);
    if (eggnum === 20) {
        document.getElementById("botegg").disabled = true;
        document.getElementById("botegg").value = "º¿À» È°¼ºÈ­?";
    }
});