var textareaIndex = 0;
$("#text").on('keydown',function(e){
  textareaIndex = this.selectionStart+1;
  if(e.keyCode == 8){
    var starText,endText,replaceText;
    var text = $(this).val();
    var selectionIndex = this.selectionStart-1;
    if(text[selectionIndex]==']'){
      var result = rep(text,selectionIndex);
      $(this).val(result.text);
      this.selectionStart = this.selectionEnd = result.index;
      return false;
    }
  }
})

$("#text").click(function(){
  textareaIndex = this.selectionStart; // 获取光标所在下标
})

function rep(str,index){
  var i = index,k='no';
  while(i>0){
    if(str[--i]=='['){
      k = i;
      break;
    }
  }
  if(k=='no')k=index
  return {text:str.substring(0,k)+str.substring(index+1),index:k}
}

$('#btn').click(function(){
  var text = $("#text").val();
  var str = text.substring(0,textareaIndex);
  var texts = str + '[公司名称]' + text.substring(textareaIndex,text.length);
  $("#text").val(texts);
})