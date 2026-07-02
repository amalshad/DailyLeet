/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {

    const m = grid.length;
    const n = grid[0].length;

    const remain = Array.from(
        { length: m },
        () => Array(n).fill(-1)
    );

    let startHealth = health - grid[0][0];

    if (startHealth <= 0) return false;

    remain[0][0] = startHealth;

    const queue = [[0, 0, startHealth]];

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (queue.length) {

        const [r, c, hp] = queue.shift();

        if (r === m - 1 && c === n - 1) {
            return true;
        }

        for (const [dr, dc] of dirs) {

            const nr = r + dr;
            const nc = c + dc;

            if (
                nr < 0 || nr >= m ||
                nc < 0 || nc >= n
            ) continue;

            const nextHp = hp - grid[nr][nc];

            if (nextHp <= 0) continue;

            if (nextHp > remain[nr][nc]) {

                remain[nr][nc] = nextHp;
                queue.push([nr, nc, nextHp]);

            }
        }
    }

    return false;
};