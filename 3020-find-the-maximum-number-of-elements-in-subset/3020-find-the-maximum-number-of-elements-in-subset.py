from collections import Counter
from typing import List

class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        
        # Special case for x = 1: best is largest odd count <= cnt[1]
        ans = cnt[1] - (cnt[1] % 2 ^ 1) if 1 in cnt else 1
        if 1 in cnt:
            del cnt[1]
        
        for x in list(cnt.keys()):
            length = 0
            cur = x
            while cnt.get(cur, 0) >= 2:
                cur *= cur
                length += 2
            length += 1 if cnt.get(cur, 0) >= 1 else -1
            ans = max(ans, length)
        
        return ans