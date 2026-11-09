let year = 2000;
let num = 3;
let age = 2026 - year + 1;

// 예시 1
if (2026 > year && year > 1900) {
    if (year < 2000) {
        if (num == 1) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 2) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }

    }
    else if (year >= 2000) {
        if (num == 3) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 4) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
} else { console.log("잘못된 입력입니다."); }

// 예시 2
year = 1998;
num = 1;
age = 2026 - year + 1;
if (2026 > year && year > 1900) {
    if (year < 2000) {
        if (num == 1) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 2) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
    else if (year >= 2000) {
        if (num == 3) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 4) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
} else { console.log("잘못된 입력입니다."); }

// 예시 3
year = 1993;
num = 1;
age = 2026 - year + 1;
if (2026 > year && year > 1900) {
    if (year < 2000) {
        if (num == 1) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 2) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
    else if (year >= 2000) {
        if (num == 3) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 4) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
} else { console.log("잘못된 입력입니다."); }

// 예시 4
year = 2030;
num = 3;
age = 2026 - year + 1;
if (2026 > year && year > 1900) {
    if (year < 2000) {
        if (num == 1) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 2) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
    else if (year >= 2000) {
        if (num == 3) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 4) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
} else { console.log("잘못된 입력입니다."); }

// 예시5
year = 1900;
num = 1;
age = 2026 - year + 1;
if (2026 > year && year > 1900) {
    if (year < 2000) {
        if (num == 1) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 2) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
    else if (year >= 2000) {
        if (num == 3) {
            console.log(age + "살 남자입니다");
        }
        else if (num == 4) {
            console.log(age + "살 여자입니다.");
        }
        else { console.log("잘못된 입력입니다."); }
    }
} else { console.log("잘못된 입력입니다."); }

// 강의내용
year = 2000;
num = 3;
age = 2026 - year + 1;
if (year < 2000) {
    if (num == 1) {
        // let age = 2026 - year + 1;
        console.log("결과 : " + age + "살 남자입니다.");
    } else if (num == 2) {
        // let age = 2026 - year + 1;
        console.log("결과 : " + age + "살 여자입니다.");
    } else {
        console.log("잘못된 입력입니다.");
    }
} // 맨 앞 if의 조건부터 맞지 않아서 출력되지 않음.
/*
else{}
*/

if (year >= 2000) {
    if (num == 3) {
        console.log("결과 : " + (2026 - year + 1) + "살 남자입니다.");
    } else if (num == 4) {
        console.log("결과 : " + (2026 - year + 1) + "살 여자입니다.");
    } else {
        console.log("잘못된 입력입니다.");
    }
}

// && 묶어서 비교
if (year < 2000 && num == 1) {
    console.log("결과 : " + age + "살 남자입니다.");
} else if (year < 2000 && num == 2) {
    console.log("결과 : " + age + "살 여자입니다.");
} else if (year >= 2000 && num == 3) {
    console.log("결과 : " + age + "살 남자입니다.");
} else if (year >= 2000 && num == 4) {
    console.log("결과 : " + age + "살 여자입니다.");
} else { console.log("잘못된 입력입니다."); }

// 정상 필터링 비교


if (year >= 1900 && year <= 2026) { // 년도 정상 필터링
    /*    if (year < 2000 && (num == 1 || num == 2)) {
            if (num==1)
                console.log()    
        }
    
    } else { console.log("잘못된 입력입니다."); }
    */
    if ((year < 2000 && (num == 1 || num == 2))
        ||
        (year >= 2000 && (num == 3 || num == 4))) {
        if (num == 1 || num == 3) {
            console.log("결과 : " + age + "살 남자입니다.");
        } else { console.log("결과 : " + age + "살 여자입니다."); }
    }
} else { console.log("결과 : " + age + "살 여자입니다."); }
