function computeLength<T>(arr: T[]){
    console.log("logic here");
}

computeLength<number>([1,2,3,4]);
computeLength<string> (['test1','test2', 'test3']);
computeLength<boolean>([true, false, true, true])