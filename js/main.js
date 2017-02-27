var loopCounter;
for(loopCounter = 0; loopCounter <= 100; loopCounter++) {
    if(loopCounter % 3 == 0) {
        continue;
    }

    document.write(loopCounter + "<br>");
}
