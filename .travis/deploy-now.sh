#!/bin/bash
set -ev

DEPLOYMENT_URL=$(now deploy \
    --public \
    --static \
    --name airbnb-master \
    --token="${NOW_TOKEN}" "${TRAVIS_BUILD_DIR}/build")

now alias set ${DEPLOYMENT_URL} ${NOW_ALIAS} --token="${NOW_TOKEN}"