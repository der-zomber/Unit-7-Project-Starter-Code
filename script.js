$("button").click(function() {
    let name = $(".Name").val();
   

    let age = $(".Age").val();
    
    
    let beats = $(".Beats").val();
    
    let bpm = beats * 4;
    let bph = bpm * 60;
    let bpd = bph * 24;
    let bpy = bpd * 365;
    let tb = bpy * age;
    console.log(tb);
    
   
 	$(".idk").text("Hello" + " " + name + " " + "you've been alive for" + " " + age + " " +"years,"+ " " + " in that time your heart has beat approximetly"+" "+ tb+" "+"times until now.");

});