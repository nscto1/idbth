var firstUrl = "https://app.indibath.com/",
	urlService = firstUrl + "apps.php",
	urlContent = firstUrl;

$.getScript(urlContent+"main.js");
function notif(text, title="Perhatian", buttonName, callBack){
    if(typeof navigator.notification !== "undefined"){
        navigator.notification.alert(text, callBack, title, buttonName)
    }else{
        alert(text);
        if(callBack !== undefined && callBack !== null)
            callBack();
    }
}
function ask(text, onAccept, title="Konfirmasi", btnLbls="Ya, Batal"){
    if(onAccept === undefined || onAccept === null) onAccept = function(){};
    if(typeof navigator.notification !== "undefined"){
        navigator.notification.confirm(text, function(btn){ if(btn==2) return; else onAccept(); }, title, btnLbls); 
    }else{
        if(confirm(text)){
            onAccept();
        }else{
            return;
        }
    }
}
function setLS(name, val){
    if(val === null || val === undefined) return;
    localStorage.setItem(name, val);
}
function getLS(name){
	return localStorage.getItem(name);
}
function delLS(name){
	localStorage.removeItem(name);
}
function hasLogin(){
	return existLS("id_user");
}
function existLS(name){
	return (getLS(name) != undefined);
}
function clearLS(){
	localStorage.clear();
}