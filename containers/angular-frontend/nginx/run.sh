#!/bin/bash

echo "Front End Environment: ${ENV}"

case ${ENV} in
"production") CONFIG=`cat environments/environment.prod.ts | tr -d '\n'` ;;
"staging") CONFIG=`cat environments/environment.stg.ts | tr -d '\n'` ;;
*) CONFIG=`cat environments/environment.ts | tr -d '\n'` ;;
esac

CONFIG=`echo "${CONFIG}" | sed -e "s/export const/var/"`

echo "CONFIG: ${CONFIG}"

CONFIG="<script>${CONFIG}</script></head>"
CONFIG=`echo "${CONFIG}" | sed -e 's#/#\\\\/#g'`
sed -i -e "s/<\/head>/${CONFIG}/g" public/index.html
