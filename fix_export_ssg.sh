#!/bin/bash
find "out" -type f -exec sed -i 's#"/_next/#"./_next/#g' {} +