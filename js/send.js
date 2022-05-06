function send(){
    let name =  document.getElementById("name")
    let email = document.getElementById("email");
    let message = document.getElementById("massage");
    let data = {
      service_id: 'service_kewftgl',
      template_id: 'template_qc554d9',
      user_id: 'TcI6XuVKZBNvogjeq',
      template_params: {
          "name":name.value,
          'email': email.value,
          "message": message.value,
      }
    };
    
    document.getElementById("send").disabled = true;
    $.ajax({
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      data: JSON.stringify(data),
      method: 'post',
      contentType: 'application/json',
      success: (data) => {
        alert("메일을 정상적으로 보냈습니다.")
        name.value = ""
        message.value = ""
        email.value = ""
          // parsing = JSON.parse(data.data);
          document.getElementById("send").disabled = false;
      },
      error: (xhr, err) => {
        alert(err)
      }
  });
  
  }
  