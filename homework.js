// 1.Merge two array
// level: \*
// desc: รวม array 2 ตัวเข้าด้วยกัน
// input: [1,2,3] , [4,5,6]
// output: [1,2,3,4,5,6]

function MergeArray(){
    const x = [1,2,3];
    const y = [4,5,6];
   
    return x.concat(y);
};

console.log(MergeArray());

//////////////////////////////////////////

// 2.Filter less than 30
// level: \*
// desc: เอาตัวที่น้อยกว่า 30 ออก
// input: [10,20,30,40,50]
// output: [30,40,50]

function FilterNum(){
    const numberA = [10,20,30,40,50];
    const noUnderThirty = numberA.filter((value) => value>=30);

    return noUnderThirty;
}

console.log(FilterNum());

//////////////////////////////////////////

// 3.Remove element from array
// level: \* \*
// desc: เอา element ใน array ออกจาก array by index (ไม่จำเป็นต้องเรียงเหมือนเดิม)
// array = [5,6,7,2,4]
// input: 2
// output: [5,6,2,4] (ไม่ตายตัว)

function RemoveEle(){
    const NumberRand = [5,6,7,2,4];
    NumberRand.splice(2, 1); //remove 1 element at index 2

    return NumberRand;
}

console.log(RemoveEle());

//////////////////////////////////////////

// 4. Roman to number
//    level: \* \* \*
//    input: "XIV"
//    output: 14

function RomanNums(){

    const roman = "XIV";
    let romanToNum = 0;

    const romanChange = {
        I: 1,
        V: 5,
        X: 10
    }

    for(let i=0; i<roman.length; i++){

        if(roman[i] === "I" && roman[i+1] === "V")
        {
            romanToNum += 4;
            i++;
        }
        else if(roman[i] === "I" && roman[i+1] === "X")
        {
            romanToNum += 9;
            i++;
        }
        // else if(roman[i] === "I" && roman[i+1] === "I" && roman[i+2] === "I")
        // {
        //     romanToNum += 3;
        //     i++;
        // }
        // else if(roman[i] === "I" && roman[i+1] === "I")
        // {
        //     romanToNum += 2;
        //     i++;
        // }
        // else if(roman[i] === "I")
        // {
        //     romanToNum += 1;
        //     i++;
        // }
        // else if(roman[i] === "V")
        // {
        //     romanToNum += 5;
        //     i++;
        // }
        // else if(roman[i] === "X")
        // {
        //     romanToNum += 10;
        //     i++;
        // }
        else
        {
            romanToNum = romanChange[roman[i]];
        }
    }
    return romanToNum;
}
console.log(RomanNums());

//ข้อนี้ทำไม่ได้จริง ๆ พอใส่เลขอื่นอย่าง II มันไม่ยอมเป็น 2

//////////////////////////////////////////

// 5. Remove duplicate from array and sort array
//    desc: เอา
//    level: โหดนิดหน่อย
//    input: [1,2,1,4,5,2,3,4,1,4]
//    output: [1,2,3,4,5]

function RemoveDup(){
    const LongNum = [1,2,1,4,5,2,3,4,1,4];
    
    newNum = LongNum.filter((value, index) => LongNum.indexOf(value) === index);
    newNum.sort();
    
    return newNum;
}

console.log(RemoveDup());

//////////////////////////////////////////

// 6. Rotate Array
//    desc: ขยับ array ไปทางขวา n ครั้ง
//    array: [1,2,3,4,5]
//    level: สุดโหด 💀
//    input: 3
//    output: [3,4,5,1,2]

function RotateArr(){
    const NumbC = [1,2,3,4,5];

    for(let i=0; i<3; i++){
        NumbC.unshift(NumbC.pop()); //delete last and add first at delete
    }

    return NumbC
}

console.log(RotateArr());