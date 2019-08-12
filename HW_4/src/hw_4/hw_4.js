const Node = function (value) {
    this.value = value;
    this.next = null;
    this.prev = null;

};

const DList = function () {

    this.root = null;
    this.length = 0;

    this.init = (vec) => {

        if (vec === null || vec === undefined) {
            return;
        }

        for (let i = 0; i < vec.length; i++) {
            if (vec[i] === null) {
                this.push(undefined);
            } else {
                this.push(vec[i]);
            }
        }
    };

    this.push = (value) => {

        if (value === null) {
            return this.length;
        }

        this.length++;

        if (this.root === null) {
            this.root = new Node(value);
            return this.length;
        }

        let temp = this.root;

        while (temp.next) {
            temp = temp.next;
        }

        temp.next = new Node(value);
        temp.next.prev = temp;
        this.root.prev = temp.next;
        return this.length;
    };

    this.pop = () => {

        let rez = null;

        if (this.length === 0) {
            return null
        }

        if (this.length === 1) {
            rez = this.root.value;
            this.root = null;
            this.length--;

            return rez;
        }

        let tempNext = this.root.next;
        let tempPrev = this.root.prev;
        rez = tempPrev.value;
        this.length--;

        if (tempPrev === tempNext) {
            this.root.next = null;
            this.root.prev = null;
        } else {
            rez = this.root.prev.value;
            this.root.prev = tempPrev.prev;
            tempPrev.prev.next = this.root;
        }

        return rez;
    };

    this.shift = () => {

        let rez = null;

        if (this.length === 1) {
            rez = this.root.value;
            this.root = null;
            return rez;
        }

        rez = this.root.value;

        this.root = this.root.next;
        this.root.prev = this.root.prev.prev;

        this.length--;

        return rez;

    };

    this.unshift = (element) => {

        if (element === null) {
            return this.length;
        }
        let insert = new Node(element);

        if (this.length === 1) {
            insert.prev = this.root;
            insert.next = this.root;
            this.root.next = insert;
            this.root.prev = insert;
            this.root = insert;

        } else {

            insert.next = this.root;
            insert.prev = this.root.prev;
            insert.next.prev = insert.next;
            insert.prev.next = insert;

            this.root = insert;
        }
        this.length++;
        return this.length;
    };

    this.sort = () => {
        let temp = null;
        let temp2 = this.root;
        let minNode = null;
        let flagSwap = false;

        while (temp2) {
            flagSwap = false;
            temp = temp2;
            while (temp) {
                if (temp2.value > temp.value) {
                    let swapValue = temp2.value;
                    temp2.value = temp.value;
                    temp.value = swapValue;
                }
                temp = temp.next;
            }
            temp2 = temp2.next;
        }
    };

    this.splice = (startIndex, count, insertVec = null) => {

        if (startIndex === undefined || startIndex === count || count === undefined) {
            return [];
        }
        if (startIndex > this.length || startIndex + count > this.length) {
            return [];
        }

        let temp = this.root;
        let iteration = 0;
        let startPos = this.root;
        let prev = null;
        let next = null;
        let rez = [];

        rez = this.slice(startIndex, count + startIndex);

        //save element
        if (startIndex === 0) {
            while (iteration != count) {
                iteration++;
                this.root = this.root.next;
                this.length--;
            }
        }

        //delete element
        else {
            let move = true;

            if (!count) {
                move = false;
                return rez;
            }
            while (iteration < startIndex + count && move) {
                if (iteration === startIndex) {
                    next = temp;
                }
                temp = temp.next;
                iteration++;
            }
            next.next = temp;
        }

        return rez;
    };

    this.slice = (startIndex, count) => {

        if (startIndex === undefined || startIndex === count || count === undefined) {
            return [];
        }
        if (startIndex > this.length || startIndex + count > this.length + 1) {
            return [];
        }

        let temp = this.root;
        let countRez = 0;
        let iteration = 0;
        let rez = [];

        while (temp) {

            if (iteration >= startIndex && iteration < count) {
                rez[countRez++] = temp.value;
            }
            temp = temp.next;
            ++iteration;
        }
        ;

        return rez;
    }

    this.get = (index) => {
        let iteration = 0;
        let temp = this.root;

        while (temp) {
            if (index === iteration++) {
                return temp.value;
            }
            temp = temp.next;
        }
    };

    this.set = (index, value) => {
        let iteration = 0;
        let temp = this.root;

        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        }

        while (temp) {
            if (index === iteration + 1) {
                let tempNext = temp.next;
                temp.next = new Node(value);
                temp.next.next = tempNext;
                return;
            }
            iteration++;
            temp = temp.next;
        }
        this.length++;
    };

    this.getVector = () => {
        let temp = this.root;
        let rez = [];

        while (temp) {
            rez.push(temp.value)
            temp = temp.next;
        }
        return rez;
    };

    this.set = (index, value) => {
        let iteration = 0;
        let temp = this.root;


        while (temp) {
            if (index === iteration) {

                temp.value = value;
                return;
            }
            iteration++;
            temp = temp.next;
        }
        this.length++;
    };

    this.getArray = () => {
        let temp = this.root;
        let arr = [];

        while (temp) {
            arr.push(temp.value);
            temp = temp.next;
        }
        return arr;

    };

    this.toString = () => {

        if (this.root === null) {
            return "[  ]";
        }
        let rez = "[ ";

        let temp = this.root;

        while (temp.next) {
            rez += temp.value;
            rez += ", ";
            temp = temp.next;
        }
        rez += temp.value;

        rez += " ]";
        return rez;
    }
};

function DListFunc() {
    DList.apply(this);
};


function AListProto() {

    AListProto.prototype.get = function (index) {};

    AListProto.prototype.init = function (vec) {};

    AListProto.prototype.toString = function () {};

    AListProto.prototype.getSize = function () {};

    AListProto.prototype.push = function (data) {};

    AListProto.prototype.pop = function () {};

    AListProto.prototype.shift = function () {};

    AListProto.prototype.unshift = function (insertElem) {};

    AListProto.prototype.sort = function (comporator) {};

    AListProto.prototype.splice = function (startIndex, count, insertVec = null) {};

    AListProto.prototype.slice = function (startIndex, count) {};

    AListProto.prototype.set = function (index, element) {};

    AListProto.prototype.get = function (index) { };

};


const AList = function () {
    this.vec = [];
};

AList.prototype = Object.create(AListProto.prototype);
AList.prototype.constructor = AList;




AListProto.prototype.init = function (vec) {

    if (vec === null) {
        return;
    } else if (vec === undefined) {
        return this.vec.push(undefined);
    }

    for (let i = 0; i < vec.length; i++) {
        this.vec[i] = vec[i];
    }

};

AListProto.prototype.toString = function () {

    if (this.vec === null) {
        return "[]";
    }

    let rez = "[ ";
    for (let i = 0; i < this.vec.length; i++) {
        if (i != 0) {
            rez += ", ";
        }
        rez += this.vec[i];

    }
    rez += " ]";

    return rez;
};

AListProto.prototype.getSize = function () {

    return this.vec.length;
};

AListProto.prototype.push = function (data) {

    if (data === null) {
        return this.getSize();
    }

    this.vec[this.vec.length] = data;

    return this.getSize();
};

AListProto.prototype.pop = function () {

    if (this.vec === null) {
        return;
    } else if (this.vec === undefined) {
        this.vec.length--;
        return this.vec.push(undefined);
    }

    let lastElement = this.vec[this.vec.length - 1];
    this.vec.length--;

    return lastElement;
};

AListProto.prototype.shift = function () {

    if (this.vec === null) {
        return;
    } else if (this.vec === undefined) {
        return;
    }

    let firstElement = this.vec[0];

    for (let i = 0; i < this.vec.length - 1; i++) {
        this.vec[i] = this.vec[i + 1];
    }
    this.vec.length--;

    return firstElement;
};

AListProto.prototype.unshift = function (insertElem) {

    if (insertElem === null) {
        return this.length;
    }
    let temp = this.vec[1];
    this.length++;
    for (let i = this.vec.length; i > 0; i--) {
        this.vec[i] = this.vec[i - 1];
    }
    this.vec[0] = insertElem;

    return this.getSize();
};

AListProto.prototype.sort = function (comporator) {

    if (comporator === null) {
        return;
    }
    if (comporator === undefined) {
        return;
    }

    this.vec.sort(comporator);
};

AListProto.prototype.splice = function (startIndex, count, insertVec = null) {

    if (startIndex > this.vec.length || startIndex === undefined) {
        return [];
    }
    if (startIndex + count > this.vec.length) {
        return [];
    }
    if (count > this.vec.length || count < 0 || count === undefined) {
        return [];
    }

    let rez = [];
    let countRez = 0;

    for (let i = startIndex; i < startIndex + count; i++) {
        rez[countRez++] = this.vec[i];
    }

    let newVec = [];
    let iteration = 0;
    for (let i = 0; i < this.vec.length; i++) {
        if (startIndex === i && insertVec != null) {
            for (let j = 0; j < insertVec.length; j++) {
                newVec[iteration++] = insertVec[j];
            }
        }

        if (i >= startIndex && i < startIndex + count) {
            continue;
        }
        newVec[iteration++] = this.vec[i];
    }
    ;

    this.vec = newVec;

    return rez;
};

AListProto.prototype.slice = function (startIndex, count) {

    if (startIndex > this.vec.length || startIndex === undefined) {
        return [];
    }
    if (startIndex + count > this.vec.length) {
        return [];
    }
    if (count > this.vec.length || count < 0 || count === undefined) {
        return [];
    }

    let vecRezult = [];   //this.vec.length - count
    let deletSize = 0;
    let newSize = 0;

    for (let i = 0; i < this.vec.length; i++) {
        if (i >= startIndex && i < count) {
            vecRezult[deletSize++] = this.vec[i];
            continue;
        }
    }
    return vecRezult;
};

AListProto.prototype.set = function (index, element) {

    if (element === null) {
        return null;
    }
    let temp = this.vec[index];
    this.vec[index] = element;

    return temp;
};

AListProto.prototype.get = function (index) {

    if (index < 0 || index > this.vec.length) {
        return undefined;
    }
    return this.vec[index];
};

