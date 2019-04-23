/*
* Basic undo redo functionality
* */
function UndoRedoStack({limit = 10}) {
    /**
     *  For understanding the concept of basic Undo Redo please refer the following link
     *  https://redux.js.org/recipes/implementing-undo-history
     *  past - It stores all the past state data (Undo)
     *  current - Stores current state data
     *  future - Stores future state (Redo)
     *  limit - the limit to max state store
     */
    this.past = [];
    this.current = null;
    this.future = [];
    this.limit = limit;
    this.self = this
}

UndoRedoStack.prototype.push = function (data, state) {
    console.log('Pushing', data)
    if (state === 'past') {
        if (this.past.length === this.limit) {
            // stack full, delete oldest element
            this.past.shift();
        }
        else {
            //Push the data in the past stack.
            this.past.push(data);
            // With every push, we should clear the future(redo) stack
            this.future = [];
        }
    } else {
        if (this.future.length === this.limit) {
            // stack full, delete oldest element
            this.future.shift();
        } else {
            // We dont need manage current state in push of type redo, because this will managed my the caller
            // of push of type redo.
            this.future.push(data);
        }
    }

};

UndoRedoStack.prototype.undo = function () {
    if (this.current === null) {
        // No current element, that means we have no data to undo
        throw new Error("No element")
    } else if (this.past.length === 0) {
        /**
         * Past stack is empty, but we have a current element, so we can undo it, and make the current state null.
         * With every undo, make sure we update the redo to. Its a mutually destructive pair. That is
         * for every undo, we should have a redo action.
         */
        throw new Error("No element")
    } else {
        // Past stack has element, we pop latest inserted element from the stack, and make it the current element.
        // We also make sure that the current element goes into the future stack. So that we can later
        // redo operation. But when we do undo
        this.future.push(this.current)
        let element = this.past.pop();
        if (element !== null) {
            this.current = element
            return element
        } else {
            let element = this.current
            this.current = null
            console.log('Last', element)
            return element
        }
    }
};

UndoRedoStack.prototype.redo = function () {
    if (this.current === null) {
        // No current element, that means we have no data to undo
        throw new Error("No element")
    } else if (this.future.length === 0) {
        /**
         Future stack is empty, dont do anything
         */
        throw new Error("No element")
    } else {
        /** Future stack has element, first redo element will be the current element, and we update
         * the past stack also. We update the current element on redo, and reduce a element from the
         * future stack
         */
        this.past.push(this.current)
        this.current = this.future.pop();
        return this.current
    }
}

UndoRedoStack.prototype.setCurrent = function (data) {
    // Sets the current element
    this.current = data
    console.log('Current', this.current)
}

export let undoRedo = {
    undoRedo: UndoRedoStack
};


