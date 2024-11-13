This repository is playground and test environment for GHA workflow POCs

### Check labeling and proper calculation of RES
- [x] Check if a `push` without PR does not set PR number
- [x] Check when fact1 and fact2 are set for PR. RES=0
- [x] Check when fact1 and fact2 are set for PR. Merge. RES=0
- [x] Check when fact1 is set but fact2 is not for PR. RES=1
- [x] Check when fact1 is set but fact2 is not for PR. Merge. RES=1
- [x] Check when fact1 is not set but fact2 is set for PR. RES=0
- [x] Check when fact1 is not set but fact2 is set for PR. Merge. RES=0
- [x] Check when fact1 and fact2 are not set for PR. RES=0
- [x] Check when fact1 and fact2 are not set for PR. Merge. RES=0

### Check execution of Actual Job based or RES value
- [ ] RES=0. Actual Job is executed for branch 
- [ ] RES=0. Actual Job is executed for main
- [x] RES=1. Actual Job is skipped for branch 
- [x] RES=1. Actual Job is skipped for main