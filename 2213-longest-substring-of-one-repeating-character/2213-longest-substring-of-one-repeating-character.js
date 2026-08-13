/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {

    let n = s.length;

    // Segment tree arrays
    let left = new Array(4 * n);
    let right = new Array(4 * n);
    let prefix = new Array(4 * n).fill(0);
    let suffix = new Array(4 * n).fill(0);
    let best = new Array(4 * n).fill(0);

    // Build the tree
    function build(node, l, r) {

        left[node] = l;
        right[node] = r;

        if (l === r) {
            prefix[node] = 1;
            suffix[node] = 1;
            best[node] = 1;
            return;
        }

        let mid = Math.floor((l + r) / 2);

        build(node * 2, l, mid);
        build(node * 2 + 1, mid + 1, r);

        merge(node);
    }

    // Merge two children
    function merge(node) {

        let leftNode = node * 2;
        let rightNode = node * 2 + 1;

        prefix[node] = prefix[leftNode];
        suffix[node] = suffix[rightNode];

        best[node] = Math.max(
            best[leftNode],
            best[rightNode]
        );

        // Check if the two parts can be joined
        if (s[left[rightNode] - 1] === s[right[leftNode] - 1]) {

            let leftSize =
                right[leftNode] - left[leftNode] + 1;

            let rightSize =
                right[rightNode] - left[rightNode] + 1;

            // Entire left segment is same
            if (prefix[leftNode] === leftSize) {
                prefix[node] += prefix[rightNode];
            }

            // Entire right segment is same
            if (suffix[rightNode] === rightSize) {
                suffix[node] += suffix[leftNode];
            }

            // Join suffix of left + prefix of right
            best[node] = Math.max(
                best[node],
                suffix[leftNode] + prefix[rightNode]
            );
        }
    }

    // Update one position
    function update(node, position, character) {

        let l = left[node];
        let r = right[node];

        if (l === r) {
            s[l - 1] = character;

            prefix[node] = 1;
            suffix[node] = 1;
            best[node] = 1;

            return;
        }

        let mid = Math.floor((l + r) / 2);

        if (position <= mid) {
            update(node * 2, position, character);
        } else {
            update(node * 2 + 1, position, character);
        }

        merge(node);
    }

    // Build
    s = s.split("");
    build(1, 1, n);

    let answer = [];

    for (let i = 0; i < queryIndices.length; i++) {

        let index = queryIndices[i] + 1;
        let character = queryCharacters[i];

        update(1, index, character);

        answer.push(best[1]);
    }

    return answer;
};