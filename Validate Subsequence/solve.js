const sequence = [1, 2, 3, 4, 5, 6];
const subSequence = [2, 4, 6];

// Complexity Time = O(N) | Space = O(1)
function withWhileLoop(sequence, subsequence) {
    sequenceIdx = 0;
    subSequenceIdx = 0;

    while (sequenceIdx < sequence.length && subSequenceIdx < subsequence.length) {
        if (sequence[sequenceIdx] === subSequence[subSequenceIdx]) {
            subSequenceIdx += 1;
        }
        sequenceIdx += 1;
    }

    return subSequenceIdx === subSequence.length;
}

function withForLoop(seq, subSeq) {
    subSeqIdx = 0;
    for (let i = 0; i < seq.length; i++) {
        if (subSeqIdx < subSeq.length) {
            if (seq[i] === subSeq[subSeqIdx]) {
                subSeqIdx += 1;
            }
        } else {
            break;
        }
    }

    return subSeqIdx === subSeq.length;

}