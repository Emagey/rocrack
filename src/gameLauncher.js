(()=>{window.addEventListener("message",a=>{if(a.source==window&&a.data)switch(a.data.direction){case"Join":{window.Roblox.GameLauncher.joinGameInstance(a.data.PlaceId,a.data.Guid);break}case"PlayPlace":{window.Roblox.GameLauncher.joinMultiplayerGame(a.data.PlaceId);break}case"PlayPrivateServer":{window.Roblox.GameLauncher.joinPrivateGame(a.data.PlaceId,a.data.PrivateServerCode,a.data.ServerId);break}case"EditPlace":{window.Roblox.GameLauncher.editGameInStudio(a.data.PlaceId);break}}});})();