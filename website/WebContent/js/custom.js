function check() {

	var id_check = /^[a-zA-Z][a-zA-Z0-9]{4,16}$/;
	var pw_check = (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,}$/);
	var pw_check1 = (/^(?=.*[a-zA-Z])(?=.*[0-9]).{10,}$/);
	var pw_check2 = (/^(?=.*[a-zA-Z])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{10,}$/);
	var pw_check3 = (/^(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{10,}$/);
	var em_check = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;

	//아이디체크

	if (!id_check.test(form.id.value)) {
		alert("아이디 조합 조건을 다시 확인하세요.");
		form.id.focus();
		return false;
	}

	//비번체크
	if (!(pw_check.test(form.pw.value) || pw_check1.test(form.pw.value)
			|| pw_check2.test(form.pw.value) || pw_check3.test(form.pw.value))) {
		alert("비밀번호 조합 조건을 다시 확인하세요.");
		form.pw.focus();
		return false;
	}

	//비번확인
	if (form.pw.value != form.pw2.value) {
		alert("비밀번호가 일치하지 않습니다. 다시 확인하세요.");
		form.pw.focus();
		return false;
	}

	//이메일 확인
	if (em_check.test(form.email_id.value)) {
		alert("이메일 형식이 바르지 않습니다.");
		form.email_id.focus();
		return false;
	}

	//휴대전화 확인
	var pchk = false;
	if(form.phone1.value=="010"){
		var p_check1 = /\d{4}/;
		if(!p_check1.test(form.phone2.value) || !p_check1.test(form.phone3.value)){
			pchk = false;
		} else{
			pchk = true;
		}
	} else if(form.phone1.value=="011" || form.phone1.value=="016" || form.phone1.value=="017" || form.phone1.value=="018" || form.phone1.value=="019"){
		var p_check2 = /\d{3}|\d{4}/;
		if(!p_check2.test(form.phone2.value) || !p_check2.test(form.phone3.value)){
			pchk = false;
		} else{
			pchk = true;
		}
	} else{
		pchk=false;
	}
	
	if(pchk==false){
		alert("잘못 입력하셨습니다.");
	}
	
	
	
	

	//성별 체크 확인
	var arrRadio = document.getElementsByName("gender");
	var chk = false;
	for (var i = 0; i < arrRadio.length; i++) {
		if ((arrRadio[i].checked)) {
			chk = true;
		}
	}
	if (!chk) {
		alert('성별을 선택하세요.');
		form.gender.focus();
		return false;
	}

	
	//회원번호 확인
	var mNum_check = /^[0-9]+$/;
	
	if(form.mNum.value!=""){
		if(!mNum_check.test(form.mNum.value)){
			alert("하이픈이나 띄어쓰기 없이 숫자만 입력해주세요.");
			form.mNum.focus();
			return false;
		}		
	}
	
	//회원인증번호
	var mNum_check2 = /^[0-9]{1,4}$/;
	
	if(form.mNum2.value!=""){
		if(!mNum_check.test(form.mNum2.value)){
			alert("4자리의 숫자만 입력하세요.");
			form.mNum2.focus();
		}		
	}
	
	
	
	
}