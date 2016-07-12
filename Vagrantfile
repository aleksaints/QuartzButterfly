# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  config.vm.box = "centos/7"
  config.vm.box_check_update = false
  config.vbguest.auto_update = true # This needs vagrant-vbguest plugin

  # host-only private network
  config.vm.network "private_network", ip: "192.168.99.99"

  # Forwarded ports
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # bridged network
  # config.vm.network "public_network"


  # Shared an additional folder to the guest VM
  # First arg: path on the host; Second arg: path on the guest (vm)
  config.vm.synced_folder ".", "/home/vagrant/QuartzButterfly"

  # VirtualBox Configs
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false      # Run as headless vm (no ui)
    vb.memory = "1024"  # Amount of RAM to take
  end

  # Provisioning. Let's install all the dependencies!
  # This going to run on the first "Vagrant up" and it will take a while based on
  # your internet connection speed. You can reprovision your machine with a
  # `vagrant reload --provision` or `vagrant provision`
  config.vm.provision "shell", inline: <<-SHELL
    # Core dependencies
    yum install -y epel-release \
      && yum install -y git-core gcc gcc-c++ docker \

    # Install node.js
    set -ex \
    && for key in \
      9554F04D7259F04124DE6B476D5A82AC7E37093B \
      94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
      0034A06D9D9B0064CE8ADF6BF1747F4AD2306D93 \
      FD3A5288F042B6850C66B31F09FE44734EB7990E \
      71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
      DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
      B9AE9905FFD7803F25714661B63B535A4C206CA9 \
      C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
      ; do \
        gpg --keyserver ha.pool.sks-keyservers.net --recv-keys "$key"; \
      done \
    && export NODE_VERSION=4.4.7 \
    && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
    && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
    && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
    && grep " node-v$NODE_VERSION-linux-x64.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
    && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
    && rm "node-v$NODE_VERSION-linux-x64.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt

    # Install dev dependencies
    /usr/local/bin/npm install -g npm@3 bower gulp karma

    # Enable docker engine service
    systemctl enable docker
    systemctl start docker
  SHELL
end
